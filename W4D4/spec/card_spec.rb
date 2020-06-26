require 'card'

describe Card do 
    describe "#initialize" do 
        subject(:card) {Card.new(:hearts, :A)}

        context 'with valid arguments' do 
            it 'instatiates a card correctly' do
                expect(card.suit).to be(:hearts)
                expect(card.value).to be(:A)
            end 
        end 
        context 'with invalid arguments' do 
            it 'raises an error when passed an invalid suit' do
                expect{Card.new(:leaf, :A)}.to raise_error('InvalidSuit')
            end 
            
            it 'raises an error when passed an invalid value' do 
                expect{Card.new(:hearts, :X)}.to raise_error('InvalidValue')
            end 
        end 

    end
end 