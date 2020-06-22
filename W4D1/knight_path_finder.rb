require_relative '00_tree_node'
require 'byebug'
class KnightPathFinder 
    attr_accessor :start, :considered_positions, :root_node

    MOVES = [
        [-2, -1], 
        [-2, 1], 
        [1, -2], 
        [1, 2], 
        [2,  1], 
        [2, -1],
        [-1, 2],
        [-1, -2]
    ]
    def self.valid_moves(pos)
        moves_valid = []

        row, col = pos 
        moves_adj = MOVES.select do |(row_change, col_change)|
            (row + row_change) >= 0 && (col + col_change) < 8 && (row + row_change) < 8 && (col + col_change) >= 0
        end
        
        moves_adj.each do |(row_change, col_change)|
            moves_valid << [row + row_change, col + col_change]
        end
        
        moves_valid
        
            
        # MOVES.each do |(row_change, col_change)|
        #     new_position = [row + row_change, col + col_change]
        #     new_position.each do |coord|
        #         if coord < 0 || coord > 7

        
    end

    def initialize(start)
        @start = start 
        @considered_positions = [start]
        build_move_tree  
    end

    def build_move_tree
        @root_node = PolyTreeNode.new(start)
        
        queue = [@root_node]
        until queue.length == 0 
            node = queue.shift 
            current_pos = node.value
            new_move_positions(current_pos).each do |new_pos|
                new_node = PolyTreeNode.new(new_pos)
                node.add_child(new_node)
                queue.push(new_node)
            end
        end
    end
#    1
#    /\
#   2  3
#  [2, 3]

    def new_move_positions(pos)
        valid = KnightPathFinder.valid_moves(pos)
        arr = valid.dup
        arr.each do |new_move|
            if considered_positions.include?(new_move)
                valid.delete(new_move)
            elsif !considered_positions.include?(new_move)
                considered_positions << new_move 
            end
        end
        valid
    end

    # def bfs(target_value)
    #     queue = [self]
    #     until queue.length == 0
    #         node = queue.shift
    #         return node if node.value == target_value
    #         node.children.each do |child|
    #             queue.push(child)
    #         end
    #     end

    #     nil
    # end

    def find_path(end_pos)
        target_position = @root_node.bfs(end_pos)
        result = trace_path_back(target_position).map do |ele|
            ele.value 
        end
        result 
    
    end

    def trace_path_back(end_position)
        positions = [] #from endpos 
        current_pos = end_position
        
        until current_pos.nil?
            positions.unshift(current_pos)
            current_pos = current_pos.parent
        end
        positions
    end
end