class CommentSerializer < ActiveModel::Serializer
  attributes :id, :post_id, :content, :user_id
end
