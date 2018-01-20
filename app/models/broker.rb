class Broker < ApplicationRecord
    geocoded_by :address, :latitude  => :latitude, :longitude => :longitude
  after_validation :geocode, if: :address_changed?
end
