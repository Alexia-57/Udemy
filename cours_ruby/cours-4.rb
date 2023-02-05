#CLASS ATTR ACCESSOR

#this is how to make it easy to write a class (see cours-3)
#attr_reader =shortcut for GETTER
#attr_writer =shortcut for SETTER
#attr_accessor =shortcut for both GETTER and SETTER

class Square
  attr_accessor :side_length #replaces the def-end of getter and setter

  def initialize(side_length) #INITIALIZE
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

  def draw
      puts "*" * @side_length
      (@side_length - 2).times do
          print "*" + (" "* (@side_length - 2)) + "*\n"
      end

      puts "*" * @side_length
  end

end

my_square = Square.new(5)
puts my_square.draw