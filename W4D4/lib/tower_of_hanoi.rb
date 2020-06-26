class TowerOfHanoi 
    attr_reader :columns, :tries, :attempts

    def initialize
        @columns = [[1,2,3], [], []] 
        @tries = 7
        @attempts = 0
    end

    def valid_position?(start, move_to)
        return false if ![start,move_to].all? {|val| val >= 0 || val <= 2}
        return false if @columns[start].empty?
        !@columns[start].empty? && (@columns[move_to].empty? || @columns[start].first < @columns[move_to].first) 
    end

    def move(start, move_to) 
        raise 'TooBigError' if !valid_position?(start, move_to)
        raise 'EmptyMoveError' if !valid_position?(start, move_to)

        start = @columns[start].shift 
        @columns[move_to].unshift(start)
        @columns
    end

    def play 
        puts "#{@column}"
        puts "Make a move such as 0,1:"
        response = gets.chomp
    end

    def won? 
        @columns[2] == [1,2,3]
    end 
end