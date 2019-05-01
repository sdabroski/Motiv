class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
    end

    def show
        
    end

    def user_params
        params.require(:user).permit(
            :first_name, 
            :last_name,
            :email,
            :password
            :birthday,
            :gender,
            :country,
            :city,
            :weight
        )
    end
end
