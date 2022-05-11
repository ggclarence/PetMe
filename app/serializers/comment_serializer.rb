class CommentSerializer < ActiveModel::Serializer
  attributes :id, :post_id, :content, :user_id, :user
  belongs_to :user
end
