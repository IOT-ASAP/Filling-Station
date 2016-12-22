package com.example.roman.tryrobospice;
import com.octo.android.robospice.SpringAndroidSpiceService;
import com.octo.android.robospice.request.springandroid.SpringAndroidSpiceRequest;
//import com.octo.android.robospice.request.springandroid.SpringAndroidSpiceRequest<RESULT>;

/**
 * Created by Roman on 22-Dec-16.
 */

class FollowersRequest extends SpringAndroidSpiceRequest<FollowerList> {

    private String user;

    public FollowersRequest(String user) {
        super(FollowerList.class);
        this.user = user;
    }

    @Override
    public FollowerList loadDataFromNetwork() throws Exception {

        String url = String.format("https://api.github.com/users/%s/followers", user);

        return getRestTemplate().getForObject(url, FollowerList.class);
    }

    /**
     * This method generates a unique cache key for this request. In this case
     * our cache key depends just on the keyword.
     * @return
     */
    public String createCacheKey() {
        return "followers." + user;
    }
}