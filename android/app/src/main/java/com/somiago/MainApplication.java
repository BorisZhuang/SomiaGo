package com.somiago;

import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.mob.MobSDK;
import com.reactnativenavigation.BuildConfig;
import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.reactnative.ivpusic.imagepicker.PickerPackage;
import com.oblador.vectoricons.VectorIconsPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {
    @Override
    protected ReactNativeHost createReactNativeHost() {
        return new NavigationReactNativeHost(this) {
            @Override
            protected String getJSMainModuleName() {
                return "index";
            }
        };
    }

    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return Arrays.<ReactPackage>asList(
                new PickerPackage(),
                new VectorIconsPackage(),
                new SharePackage()
        );
    }

    @Override
    public void onCreate() {
        super.onCreate();
        MobSDK.init(this, "2223caeda9cb0", "229efcb55b335b536caa8b5c4a1af320");
    }
}