require "tower_of_hanoi"

# if disk1.size > disk2.size then we cannot move on top
# one disk at a time can be moved 
# number of tries/moves is 7 
# move top disk onto bigger or an empty space

# [ [1,2,3] [] [] ] shift and unshift 

describe 'TowerOfHanoi' do 
    subject(:columns) {TowerOfHanoi.new}

    describe "#initialize" do 
        it 'sets 3 columns' do 
            expect(columns.columns).to eq([[1, 2, 3], [], []])
        end

        it 'sets number of tries to 7' do 
            expect(columns.tries).to eq(7)
        end

        it 'sets number of attempts to 0' do 
            expect(columns.attempts).to eq(0)
        end
    end

    describe '#move' do 
        it 'adds disc to another column' do 
            expect(columns.move(0,1)).to eq([[2,3], [1], []])
        end

        context 'invalid moves' do 
            it 'raises an error if moving onto a smaller disk' do 
                columns.move(0,1)
                expect {columns.move(0,1)}.to raise_error{'TooBigError'}
            end

            it 'raises an error if moving from an empty column' do 
                expect {columns.move(2,0)}.to raise_error{'EmptyMoveError'}
            end
        end

        describe '#won?' do 
            it 'is won if all disks are in column 3' do 
                columns.move(0,2) 
                columns.move(0,1)
                columns.move(2,1)
                columns.move(0,2)
                columns.move(1,0)
                columns.move(1,2)
                columns.move(0,2)
                expect(columns.won?).to be true 
            end 

        end 
    end

    
end