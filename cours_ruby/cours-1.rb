  #STRINGS

system "clear"

puts "Hello World!".upcase
puts "Hello World!".reverse
puts "Hello World!".length
puts "My name is ABC"

#print displays all on same line, puts displays on separate lines

  #VARIABLES

first_name = "John"
last_name = "Elder"
age = 40
puts first_name
puts last_name
puts age

#variables should only have lowercase otherwise it becomes a class

  #GETS: GET USER INPUT

print "Enter Your Name:"
name = gets.chomp
puts "Hello #{ name }, how are you?"

# gets is to get information input from user
# if you enter name, you will get the message Hello, how are you"
# chomp is to display on the same line after get, otherwise other line after gets.

  #MATHS (+ - * / ** %)

puts 10 + 5
puts 10 % 5
puts 10 ** 5
puts 10.0 / 3.0
puts 10 / 3

#ideally put decimals, otherwise 10/3 = 3 (integer number) instead of 3.333 (floating number)

print "Enter a number:"
number = gets.to_i

puts number
puts number + 10

#Gets works only with strings. If we want to work with numbers with gets, we need to convert into an number with gets.to_i
#number.to_s converts a number into a string

  #COMPARISON (== != > <　>=　<=）

puts 2 == 2
puts 3 == 2
puts "John" == "john"
puts "John" == "John"

  #ASSIGNEMENTS OPERATORS (+= -= *= /= **= %=)

age = 39
puts age #it will be 39 as assigned above
puts age + 1 #it becomes 40
puts age #it changes back to 39 because not assigned
puts age += 1 #it will be 40 because assigned thanks to +=

  #CONDITIONAL STATEMENTS (if else)

print "Enter a number between 1 and 10:"
num = gets.to_i

if num > 10
  puts "Hey, I said between 1 and 10!"
elsif num > 5
  puts "#{ num } is greater than 5"

elsif num == 5
  puts "#{ num } is equal to 5"

else
  puts "#{ num } is less than 5"
end

print "Enter your name:"
name = gets.chomp

if name == "John"
  puts "Hello John"
else
  puts "I don't know you!"
end

#ENDがどこかで足りない？
# syntax error, unexpected tIDENTIFIER, expecting end-of-input   puts number + 10ß

#ARRAYS

first_name = "Bob"
array_in_array = [1, 2, 3, 4]
names = ["John", "Tim","Mary","Tina", 55, first_name, array_in_array, "Lily"]

puts names[0]
puts names[2]
puts names[4] - 5
puts names.length
puts names[5][4]
puts names[names.length - 1] #in order to get the last item of an array when cannot be manually counted
puts names[6]

#LOOPS

num = 1

while num < 10
  puts num
  puts "I love cheese!"
  num +=1
end

#LOOPS (while & each)

num = 1

while num < 10
  puts num
  num +=1
end

#a "while loop" continues as long as the condition is true (in our case, until num = 1)
#num +=1 is to add +1 to our initial number in the loop (otherwise it's infinite 1 instead of 1,2,3 to 10)

(1..10).each do |num|
  puts "I love cheese!"
#(x...x) is a range and .each do is the each loop formula
end

names = ["John", "Tim", "Mary"]
names.each do |name|
  puts name
end

#HASHES (complicated array)

names = ["John", "Tim", "Mary"] #this is an array
favorite_pizza = {
"John" => "Pepperoni",
"Tim" => "Mushroom",
"Mary" => "Cheese"
} #this is a hash

puts favorite_pizza["John"]