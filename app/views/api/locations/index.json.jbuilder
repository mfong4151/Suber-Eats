json.locations do
    @users.each do |user|
        json.set! user.id do
            json.extract! user, :id, :longitude, :latitude
        end
    end 
end