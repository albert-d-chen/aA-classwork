require 'deck'

describe Deck do 

    describe '#initialize' do 
        it 'has to have 52 cards' do 
            cards = Deck.new
            expect(cards.length).to eq(52)
        end 

        

    end 
end 