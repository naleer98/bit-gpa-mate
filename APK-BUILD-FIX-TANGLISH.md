# APK Build Fix – Tanglish

Previous GitHub Actions run `Build installable debug APK` step-la fail aagiyirundhathu.

## Fixes included

- Android 12 theme-la invalid `android:postSplashScreenTheme` attribute remove pannappattathu.
- GitHub Actions official/current major tags use pannappattathu:
  - `actions/checkout@v6`
  - `actions/setup-java@v5`
  - `gradle/actions/setup-gradle@v6`
  - `actions/upload-artifact@v6`
- Gradle build log detail increase pannappattathu.

## GitHub update

1. ZIP extract pannunga.
2. Extract folder-ukulla irukkura ellaa files/folders-um copy pannunga.
3. Existing `bit-gpa-mate` repository folder-la paste → Replace.
4. GitHub Desktop summary: `Fix Android APK build`
5. Commit to main → Push origin.
6. GitHub → Actions → Build Android APK.
7. Green tick vandha run open pannitu Artifacts-la `BIT-GPA-Mate-Android-APK` download pannunga.
