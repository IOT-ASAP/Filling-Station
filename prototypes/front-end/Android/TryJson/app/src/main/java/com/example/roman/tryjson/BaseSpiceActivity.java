package com.example.roman.tryjson;

/**
 * Created by Roman on 17-Dec-16.
 */

    import android.app.Activity;

    import com.octo.android.robospice.SpiceManager;


    public abstract class BaseSpiceActivity extends Activity {
        private SpiceManager spiceManager = new SpiceManager(SampleSpiceService.class);

        @Override
        protected void onStart() {
            spiceManager.start(this);
            super.onStart();
        }

        @Override
        protected void onStop() {
            spiceManager.shouldStop();
            super.onStop();
        }

        protected SpiceManager getSpiceManager() {
            return spiceManager;
        }

    }
