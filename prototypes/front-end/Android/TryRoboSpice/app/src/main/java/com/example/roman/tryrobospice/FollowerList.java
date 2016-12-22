package com.example.roman.tryrobospice;

/**
 * Created by Roman on 22-Dec-16.
 */

public class FollowerList extends ArrayList<FollowerList.Follower> {
    private static final long serialVersionUID = 8192333539004718470L;

    @JsonIgnoreProperties(ignoreUnknown = true)
    public class Follower {

        private String login;

        public String getLogin() {
            return login;
        }

        public void setLogin(String login) {
            this.login = login;
        }
    }

}
