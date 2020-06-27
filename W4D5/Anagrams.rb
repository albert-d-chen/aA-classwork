def first_anagram?(str1, str2)
    letters = str1.split('')
    anagrams = letters.permutation.to_a
    arr = []
    anagrams.each do |sub|
        arr << sub.join('')
    end
    arr.include?(str2)
end


# str1 = 'hello'
# str2 = 'bye'
# p first_anagram?(str1, str2)

def second_anagram?(str1, str2)
    letters2 = str2.split('')

    str1.each_char do |char|
        if str2.include?(char)
            index = letters2.find_index(char)
            letters2.delete_at(index)
        end
    end

    letters2.empty?
end

# str1 = 'hello'
# str2 = 'olleh'
# p second_anagram?(str1, str2)

def third_anagram?(str1, str2)

end

str1 = 'hello'
str2 = 'olleh'
p third_anagram?(str1, str2)


#O(n + m) time 
#O(1) constant space, hashes are constant space because
# hash maxes at 26+symbols.
def fourth_anagram?(str1, str2)
    counter1 = Hash.new(0)
    counter2 = Hash.new(0)

    str1.each_char do |char|
        counter1[char] += 1
    end

    str2.each_char do |char|
        counter2[char] += 1
    end
    counter1 == counter2
end

def fourth_anagram(str1, str2)
    hash = Hash.new{|h,k| h[k] = [0,0]}
    (0...str1.length).each do |i|
        hash[str1[i]][0] += 1
        hash[str2[i]][1] += 1
    end
    hash.values.all?{|val| val.uniq.count == 1}
    end
end

    counter1 = Hash.new(0)

    (0...str1.length).each do |i|
        counter1[str1[i]] += 1
        counter1[str2[i]] -= 1
    end

    str2.each_char do |char|
        counter2[char] += 1
    end
    counter1.values.all?{|val| val == 0}