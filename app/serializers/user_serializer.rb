# frozen_string_literal: true

class UserSerializer
  include JSONAPI::Serializer

  attributes :username, :email, :admin
end
