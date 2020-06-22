class PolyTreeNode
    attr_reader :parent, :children, :value

    def initialize(value)
        @parent = nil
        @children = []
        @value = value 
    end

    def parent=(parent) #node3 = (node2)  #node2.parent = (node1) #node3.parent = (node1)
        return if @parent == parent

        if self.parent != nil 
            self.parent.children.delete(self)
        end

        @parent = parent #node3.parent = node2
        @parent.children << self unless @parent.nil? #node2.children includes node3

        self
    end

    def add_child(child_node)
        child_node.parent= self
    end

    def remove_child(child_node)
        child_node.parent = nil
        raise "Error. Invalid child." if !self.children.include?(child_node) 
    end

    def dfs(target_value)
        return self if @value == target_value 

        @children.each do |child|
            answer = child.dfs(target_value) 
            return answer unless answer.nil?
        end

        nil
    end

    def bfs(target_value)
        queue = [self]
        until queue.length == 0
            node = queue.shift
            return node if node.value == target_value
            node.children.each do |child|
                queue.push(child)
            end
        end

        nil
    end

   




end

