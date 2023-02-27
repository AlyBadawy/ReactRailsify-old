# frozen_string_literal: true

class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session,
                       if: proc { |c| c.request.format.include "application/json" }

  include RecordExceptionHandler
  include JwtExceptionHandler
end
