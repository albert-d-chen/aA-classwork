class Node
  attr_reader :key
  attr_accessor :val, :next, :prev

  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @next = nil
    @prev = nil
  end

  def to_s
    "#{@key}: #{@val}"
  end

  def remove
    # optional but useful, connects previous link to next link
    # and removes self from list.
  end
end

class LinkedList
  include Enumerable
  def initialize
    @head = Node.new
    @tail = Node.new 
    @head.next = @tail 
    @tail.prev = @head 

  end

  def [](i)
    each_with_index { |link, j| return link if i == j }
    nil
  end

  def first
    return nil if empty?
    @head.next
  end

  def last
    return nil if empty?
    @tail.prev
  end

  def empty?
    @head.next == @tail
  end

  def get(key)
  end

  def include?(key)
  end

  def append(key, val)
      new_node = Node.new(key, val)
      new_node.prev = @tail.prev
      new_node.next = @tail
      @tail.prev = new_node
  end

  def update(key, val)
  end

  def remove(key)
  end

  def each
  end

  # uncomment when you have `each` working and `Enumerable` included
  # def to_s
  #   inject([]) { |acc, link| acc << "[#{link.key}, #{link.val}]" }.join(", ")
  # end
end


#nil <-next prev->node head<-next node prev -> tail  node <-next    tail  prev-> nil 
# [@head, @node1, @node2, @tail]
# [@head, @tail]
# prev going left, next goes right 
