json.users do
    @users.each do |user|
        json.set! user.id do
            json.extract! user, :id, :email, :phone_number
        end
    end 
end