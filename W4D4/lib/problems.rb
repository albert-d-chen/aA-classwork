class Array 
    def uniq 
        new_arr = []

        self.each do |ele|
            new_arr << ele if !new_arr.include?(ele)
        end
        new_arr
    end

    def two_sum
        arr = []
        (0...self.length).each do |i| 
            (i+1...self.length).each do |j| 
                arr << [i,j] if self[i] + self[j] == 0 
            end 
        end 
        arr 
    end 

    def my_transpose 
        return self if self.empty?
        cols = []
        (0...self.length).each do |row|
            temp_arr = []
            (0...self.length).each do |col|
                temp_arr << self[col][row]
            end
            cols << temp_arr 
        end
        cols
    end

    def pick_stocks 
        max_profit = 0 
        best_profit_pair = nil  

        (0...self.length).each do |i| 
            (i+1...self.length).each do |j| 
                if (self[j] - self[i]) > max_profit 
                    max_profit = self[j] - self[i] 
                    best_profit_pair = [i, j] 
                end 
            end 
        end
        best_profit_pair
    end 
end