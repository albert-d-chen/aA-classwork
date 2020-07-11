require 'action_view'
class Feline < ApplicationRecord
    include ActionView::Helpers::DateHelper 

    CAT_COLORS = %w(White Black Orange Grey)
    validates :color, inclusion: CAT_COLORS 
    validates :sex, inclusion: {in: %w(M F)}
    validates :birth_date, :color, :name, :sex, presence: true 

    def age 
        time_ago_in_words(birth_date)
    end
end


