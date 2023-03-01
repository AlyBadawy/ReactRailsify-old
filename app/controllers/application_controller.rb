# frozen_string_literal: true

class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session,
                       if: proc { |c| c.request.format == "application/json" }

  include RecordExceptionHandler
  include JwtExceptionHandler
  include AuthExceptionHandler

  include JwtAuthenticatable

  include JSONAPI::Deserialization

  before_action :underscore_params!

  private

  def jsonapi_meta(resources)
    meta = { provider: ENV.fetch("API_PROVIDER") }
    meta[:total] = resources.respond_to?(:count) ? resources.count : 1

    meta
  end

  def underscore_params!
    params.deep_transform_keys! do |key|
      ["Access-Token", "Refresh-Token"].include?(key) ? key : key.underscore
    end
  end
end
