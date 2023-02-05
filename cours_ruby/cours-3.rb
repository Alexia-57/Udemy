system "clear"

#METHODS (=functions)

#Put all methods definition at the top at the program so Ruby knows them at the earliest

def hello()
  puts "Hello there!"
end
#how to define a method (def name() puts "contents")

hello
#in order to run the method, just type its name

def hello(name)
  puts "Hello there #{ name }!"
end

hello("John")

def hello(num)
  puts "Hello there #{ num + 10 }!"
end

hello(40)

def hello(first_name, last_name)
  return "Hello there #{ first_name } #{ last_name }!"
end

method_output = hello("John", "Elder")

puts method_output
puts method_output.upcase
#better to use "return", "name of variable", puts name of variable
#if we use variable in a method, we can do variably thing to it so it's useful

#CLASS

#works like a factory, e.g: factory making hats (class) which can be blue, yellow...)
#Capital letters for class
#when you make a variable in a class, put @ in front of it

class Square #CLASS

  def initialize(side_length) #INITIALIZE
      @side_length = side_length
  end

  def side_length #GETTER
    return @side_length
  end

  def side_length=(side_length) #SETTER (works with =)
      @side_length = side_length
  end

  def perimeter
      return "Perimeter: #{@side_length * 4}"
  end

  def area
      return @side_length * @side_length
  end

  def to_s
      return "Side Length: #{@side_length}\nPerimeter: #{perimeter}\nArea: #{area}"
  end

end

my_square = Square.new(10)
puts my_square.side_length #use .side_length to get side length defined above

my_square.side_length = 20 #change side_length from 10 to 20
puts my_square.side_length

puts my_square.perimeter
puts my_square.area

puts my_square

#.inspect can be used to get info about an object
