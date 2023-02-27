# frozen_string_literal: true

class ApplicationController < ActionController::Base
  include RecordExceptionHandler
  include JwtExceptionHandler
end
