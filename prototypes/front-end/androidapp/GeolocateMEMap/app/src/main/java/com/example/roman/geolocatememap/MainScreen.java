package com.example.roman.geolocatememap;


import android.os.Bundle;


import android.support.v7.app.AppCompatActivity;

import android.content.Intent;

import android.view.View;


/**
 * Created by Roman on 10-Dec-16.
 */

public class MainScreen extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main_screen);
    }


    public void startmap(View view) {
        // Do something in response to button
        Intent intent = new Intent(this, MapsActivity.class);

       // !!! Here i should create activity only if it is not started yet or i should go back to activity.
        startActivity(intent);

    }

    public void startfriendsmenu (View view) {
        Intent intent = new Intent(this, FriendsMenu.class);

        startActivity(intent);

    }

    public void startsetmenu (View view) {
        Intent intent = new Intent(this, SettingMenu.class);

        startActivity(intent);

    }

    public void startabout (View view) {

        Intent intent = new Intent(this, AboutProgram.class);
        startActivity(intent);

    }


}
