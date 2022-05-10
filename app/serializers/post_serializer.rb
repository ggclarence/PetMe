class PostSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :image_url, :description
end
