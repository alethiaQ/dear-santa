class Gift < ApplicationRecord
  belongs_to :user
  validates :category, inclusion: { in: %w{gift-for parents family friends other all} }
end
