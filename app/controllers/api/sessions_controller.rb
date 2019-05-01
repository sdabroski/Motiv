class Api::SessionsController < ApplicationController
    def create
      @user = User.find_by_credentials(params[:user][:email],params[:user][:password])
        if @user
            login(@user)
            render "/users/show"
        else
            render json: ["Invalid Credentials, please try again"], status: 401
        end
    end

    def destroy
        logout
    end
end
