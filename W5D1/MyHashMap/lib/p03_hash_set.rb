class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    hashed_key = key.hash 
    if !include?(hashed_key)
      self[hashed_key] << key 
      @count += 1
    end
    resize! if count == num_buckets 
  end

  def include?(key)
    hashed_key = key.hash 
    self[hashed_key].include?(key)
  end

  def remove(key)
    hashed_key = key.hash 
    if include?(key)
      self[hashed_key].delete(key)
      @count -= 1
    end

  end

  private

  def [](num)
   mod = num % num_buckets
   @store[mod]  
  end

  def num_buckets
    @store.length
  end

  def resize!
    old_keys = @store.flatten 
    @store = Array.new(2 * num_buckets) { Array.new }
    @count = 0
    old_keys.each do |key|
      insert(key)
    end
  end
end


