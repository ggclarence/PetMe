class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :profilePicUrl, :email, :bio, :posts
  has_many :posts
end
