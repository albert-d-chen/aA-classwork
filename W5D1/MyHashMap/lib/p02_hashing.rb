class Integer
  # Integer#hash already implemented for you
end

class Array
  def hash
    str = '' 
    self.each_with_index do |ele, i|
      str += (ele ^ i).to_s
    end
    str.to_i.hash 
  end
end

class String
  def hash
    alpha = ('a'..'z').to_a
    arr = []
    self.each_char do |char|
      arr << alpha.index(char)
    end
    arr.hash 
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash

  end
end
