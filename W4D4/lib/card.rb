class Card
    SUITS = [
        :hearts,
        :spades,
        :clubs,
        :diamonds
    ]
    VALUE = [
        :A,
        :K,
        :Q,
        :J,
        :Ten,
        :Nine,
        :Eight,
        :Sev,
        :Six,
        :Fi,
        :Fo,
        :Th,
        :Tw,
        :One
    ]

    attr_reader :suit, :value 
    
    def initialize(suit, value)
        raise 'InvalidSuit' unless SUITS.include?(suit)
        raise 'InvalidValue' unless VALUE.include?(value)
        @suit = suit
        @value = value 
    end
end 
