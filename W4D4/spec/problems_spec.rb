require 'problems'

describe Array do 
    describe '#uniq' do 
    array = [1,2,1,3,3]
        it 'remove duplicates' do 
            expect(array.uniq).to eq([1,2,3])
        end
    end

    describe '#two_sum' do 
    array = [-1,0,2,-2,1]
        it 'finds zero sum pair' do 
            expect(array.two_sum).to eq([[0,4], [2,3]])
        end 
    end 
    
    describe '#my_transpose' do 
    rows = [[0, 1, 2], [3, 4, 5], [6, 7, 8]]
    rows1 = []
        it 'turns rows into columns' do
            expect(rows.my_transpose).to eq ([[0, 3, 6], [1, 4, 7], [2, 5, 8]])
        end
        it 'returns an empty array if argument is empty' do 
            expect(rows1.my_transpose).to be_empty
        end
    end

    describe "#pick_stocks" do
        arr = [7, 0, 2, 8, 4, 11] 
        it "finds the most porfitable pair" do 
            expect(arr.pick_stocks).to eq([1, 5]) 
        end 
        it "can't sell stock before you buy" do 
            expect(arr[arr.pick_stocks.first] < arr[arr.pick_stocks.last]).to be(true)
        end
        #    it { is_expected.to be self[self.pick_stocks.first] < self[self.pick_stocks.last] }
    end 
end

# RSpec.describe 18 do
#   it { is_expected.to be < 20 }