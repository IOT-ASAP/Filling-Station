package com.example.roman.tryrobospice;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;


import com.octo.android.robospice.JacksonSpringAndroidSpiceService;
import com.octo.android.robospice.SpiceManager;
import com.octo.android.robospice.persistence.DurationInMillis;
import com.octo.android.robospice.persistence.exception.SpiceException;
import com.octo.android.robospice.request.listener.RequestListener;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    protected SpiceManager spiceManager = new SpiceManager(JacksonSpringAndroidSpiceService.class);


    @Override
    protected void onStart() {
        super.onStart();
        spiceManager.start(this);
    }

    @Override
    protected void onStop() {
        spiceManager.shouldStop();
        super.onStop();
    }

//------------------------------------------------------------------------
//---------end of block that can fit in a common base class for all activities
//------------------------------------------------------------------------

    //private void performRequest(String user) {
     //   MainActivity.this.setProgressBarIndeterminateVisibility(true);

      //  FollowersRequest request = new FollowersRequest(user);
      //  lastRequestCacheKey = request.createCacheKey();

      //  spiceManager.execute(request, lastRequestCacheKey, DurationInMillis.ONE_MINUTE, new ListFollowersRequestListener());
    //}

    private class ListFollowersRequestListener implements RequestListener<FollowerList> {

        @Override
        public void onRequestFailure(SpiceException e) {
            //update your UI
        }

        @Override
        public void onRequestSuccess(FollowerList listFollowers) {
            //update your UI
        }
    }

}


