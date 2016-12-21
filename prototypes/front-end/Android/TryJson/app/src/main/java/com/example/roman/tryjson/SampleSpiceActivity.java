package com.example.roman.tryjson;


import android.os.Bundle;
import android.widget.TextView;
import android.widget.Toast;

import com.octo.android.robospice.persistence.DurationInMillis;
import com.octo.android.robospice.persistence.exception.SpiceException;
import com.octo.android.robospice.request.listener.RequestListener;
import com.octo.android.robospice.request.simple.SimpleTextRequest;


public class SampleSpiceActivity extends BaseSpiceActivity {

    private TextView mTxtView;
    private SimpleTextRequest txtRequest;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mTxtView = (TextView) findViewById(R.id.txtV);

        txtRequest = new SimpleTextRequest("http://localhost:8000/api/v1.0/user/3/?format=json");
    }

    @Override
    protected void onStart() {
        super.onStart();

        getSpiceManager().execute(txtRequest, "txt", DurationInMillis.ONE_MINUTE,
                new TextRequestListener());
    }

    public final class TextRequestListener implements RequestListener<String> {

        @Override
        public void onRequestFailure(SpiceException spiceException) {
            Toast.makeText(SampleSpiceActivity.this, "failure", Toast.LENGTH_SHORT).show();
        }

        @Override
        public void onRequestSuccess(final String result) {

            Toast.makeText(SampleSpiceActivity.this, "success", Toast.LENGTH_SHORT).show();

            mTxtView.setText(result);
        }
    }
}
