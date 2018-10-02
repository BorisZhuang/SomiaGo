package com.somiago;

import android.content.Context;
import android.os.Environment;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;

import cn.sharesdk.framework.Platform;
import cn.sharesdk.framework.ShareSDK;
import cn.sharesdk.onekeyshare.OnekeyShare;
import cn.sharesdk.wechat.moments.WechatMoments;

public class ShareModule extends ReactContextBaseJavaModule {
    private Context mContext;

    public ShareModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.mContext = reactContext.getApplicationContext();
    }

    @Override
    public String getName() {
        return "MobShare";
    }

    @ReactMethod
    public void showShare(ReadableArray images) {
        Platform.ShareParams sp = new Platform.ShareParams();
        String[] imagesArray = new String[images.size()];
        for (int i = 0; i < images.size(); i++) {
            imagesArray[i] = images.getString(i);
        }
        sp.setImageArray(imagesArray);
        Platform wechatMoments = ShareSDK.getPlatform(WechatMoments.NAME);
        wechatMoments.share(sp);
    }
}
