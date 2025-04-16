class Category < ApplicationRecord
    # Associations
    has_many :products, dependent: :destroy
    
    # Validations
    validates :name, presence: true, uniqueness: true
    
    # Scopes
    scope :active, -> { where(is_active: true) }
    scope :inactive, -> { where(is_active: false) }

    before_save :set_active

    private
    def set_active
        self.is_active = true if self.is_active.nil?
    end
end
