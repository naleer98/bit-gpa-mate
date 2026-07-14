package com.naleerkhan.bitgpamate;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.view.View;
import android.view.animation.DecelerateInterpolator;

public class SplashActivity extends Activity {
    private static final long SPLASH_DURATION_MS = 1750L;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);

        View card = findViewById(R.id.splashCard);
        View logo = findViewById(R.id.splashLogo);
        View university = findViewById(R.id.splashUniversity);
        View title = findViewById(R.id.splashTitle);
        View caption = findViewById(R.id.splashCaption);
        View developer = findViewById(R.id.splashDeveloper);
        View role = findViewById(R.id.splashRole);

        card.setAlpha(0f);
        card.setScaleX(0.94f);
        card.setScaleY(0.94f);
        card.animate().alpha(1f).scaleX(1f).scaleY(1f).setDuration(520L)
                .setInterpolator(new DecelerateInterpolator()).start();

        logo.setAlpha(0f);
        logo.setScaleX(0.75f);
        logo.setScaleY(0.75f);
        logo.animate().alpha(1f).scaleX(1f).scaleY(1f).setStartDelay(120L).setDuration(620L)
                .setInterpolator(new DecelerateInterpolator()).start();

        animateText(university, 250L);
        animateText(title, 350L);
        animateText(caption, 450L);
        animateText(developer, 570L);
        animateText(role, 650L);

        new Handler(Looper.getMainLooper()).postDelayed(() -> {
            startActivity(new Intent(this, MainActivity.class));
            overridePendingTransition(android.R.anim.fade_in, android.R.anim.fade_out);
            finish();
        }, SPLASH_DURATION_MS);
    }

    private void animateText(View view, long delay) {
        view.setAlpha(0f);
        view.setTranslationY(20f);
        view.animate().alpha(1f).translationY(0f).setStartDelay(delay).setDuration(430L)
                .setInterpolator(new DecelerateInterpolator()).start();
    }
}
