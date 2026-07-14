package com.naleerkhan.bitgpamate;

import android.app.Activity;
import android.content.ActivityNotFoundException;
import android.content.Context;
import android.content.Intent;
import android.graphics.Color;
import android.net.Uri;
import android.os.Bundle;
import android.print.PrintAttributes;
import android.print.PrintDocumentAdapter;
import android.print.PrintManager;
import android.view.View;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.ProgressBar;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.webkit.WebViewAssetLoader;
import androidx.webkit.WebViewClientCompat;

public class MainActivity extends Activity {
    private static final String LOCAL_URL = "https://appassets.androidplatform.net/assets/www/index.html";

    private WebView webView;
    private ProgressBar loadingIndicator;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        getWindow().setStatusBarColor(getColor(R.color.brand_dark));
        getWindow().setNavigationBarColor(Color.WHITE);

        webView = findViewById(R.id.webView);
        loadingIndicator = findViewById(R.id.loadingIndicator);

        configureWebView();

        if (savedInstanceState == null) {
            webView.loadUrl(LOCAL_URL);
        } else {
            webView.restoreState(savedInstanceState);
        }
    }

    private void configureWebView() {
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setDatabaseEnabled(true);
        settings.setAllowFileAccess(false);
        settings.setAllowContentAccess(false);
        settings.setBuiltInZoomControls(false);
        settings.setDisplayZoomControls(false);
        settings.setSupportZoom(false);
        settings.setMediaPlaybackRequiresUserGesture(true);
        settings.setUserAgentString(settings.getUserAgentString() + " BITGPAMateAndroid/1.0");

        webView.setBackgroundColor(getColor(R.color.splash_background));
        webView.setOverScrollMode(View.OVER_SCROLL_NEVER);
        webView.setWebChromeClient(new WebChromeClient());
        webView.addJavascriptInterface(new NativeBridge(), "NativeBridge");

        WebViewAssetLoader assetLoader = new WebViewAssetLoader.Builder()
                .addPathHandler("/assets/", new WebViewAssetLoader.AssetsPathHandler(this))
                .build();

        webView.setWebViewClient(new LocalContentWebViewClient(assetLoader));
    }

    private final class LocalContentWebViewClient extends WebViewClientCompat {
        private final WebViewAssetLoader assetLoader;

        private LocalContentWebViewClient(WebViewAssetLoader assetLoader) {
            this.assetLoader = assetLoader;
        }

        @Override
        public WebResourceResponse shouldInterceptRequest(@NonNull WebView view, @NonNull WebResourceRequest request) {
            return assetLoader.shouldInterceptRequest(request.getUrl());
        }

        @Override
        @SuppressWarnings("deprecation")
        public WebResourceResponse shouldInterceptRequest(WebView view, String url) {
            return assetLoader.shouldInterceptRequest(Uri.parse(url));
        }

        @Override
        public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
            Uri uri = request.getUrl();
            if ("appassets.androidplatform.net".equals(uri.getHost())) return false;
            openExternal(uri);
            return true;
        }

        @Override
        @SuppressWarnings("deprecation")
        public boolean shouldOverrideUrlLoading(WebView view, String url) {
            Uri uri = Uri.parse(url);
            if ("appassets.androidplatform.net".equals(uri.getHost())) return false;
            openExternal(uri);
            return true;
        }

        @Override
        public void onPageFinished(WebView view, String url) {
            super.onPageFinished(view, url);
            loadingIndicator.setVisibility(View.GONE);
            view.evaluateJavascript(
                    "window.__BIT_GPA_NATIVE__=true;" +
                    "const b=document.getElementById('installAppBtn');if(b)b.style.display='none';" +
                    "window.print=function(){window.NativeBridge.printPage();};",
                    null
            );
        }

        @Override
        public boolean onRenderProcessGone(WebView view, android.webkit.RenderProcessGoneDetail detail) {
            Toast.makeText(MainActivity.this, "App view restarted.", Toast.LENGTH_SHORT).show();
            recreate();
            return true;
        }
    }

    private void openExternal(Uri uri) {
        try {
            startActivity(new Intent(Intent.ACTION_VIEW, uri));
        } catch (ActivityNotFoundException error) {
            Toast.makeText(this, "No app found to open this link.", Toast.LENGTH_SHORT).show();
        }
    }

    public final class NativeBridge {
        @JavascriptInterface
        public void printPage() {
            runOnUiThread(MainActivity.this::printCurrentPage);
        }
    }

    private void printCurrentPage() {
        PrintManager printManager = (PrintManager) getSystemService(Context.PRINT_SERVICE);
        PrintDocumentAdapter adapter = webView.createPrintDocumentAdapter("BIT GPA Mate Report");
        printManager.print("BIT GPA Mate Report", adapter, new PrintAttributes.Builder().build());
    }

    @Override
    public void onBackPressed() {
        if (webView != null && webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }

    @Override
    protected void onSaveInstanceState(@NonNull Bundle outState) {
        webView.saveState(outState);
        super.onSaveInstanceState(outState);
    }

    @Override
    protected void onDestroy() {
        if (webView != null) {
            webView.loadUrl("about:blank");
            webView.clearHistory();
            webView.removeAllViews();
            webView.destroy();
            webView = null;
        }
        super.onDestroy();
    }
}
