class Gift < ApplicationRecord
  validates :name, :price, :category, presence: true
  validates :category, inclusion: { in: %w(to-give friends other family parents kids) }
end
