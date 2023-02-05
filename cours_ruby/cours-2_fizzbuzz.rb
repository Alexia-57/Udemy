#BUILDING FIZZBUZZ:
#build a program that prints all numbers betweeen 1 and 100
#if a number is divisible by 3, print fizz
#if a number is divisible by 5, print buzz
#if a number is divisible by both, print fizzbuzz

system "clear"

#option with an "each loop"

(1..100).each do |num|
  puts num

  if num % 3 == 0 && num % 5 == 0
    puts "#{num}. FIZZBUZZ!"

  elsif num % 3 == 0
    puts "#{num}. FIZZ!"

  elsif num % 5 == 0
    puts "#{num}. BUZZ!"

  else
    puts "#{num}."
  end
end


#option with an "while loop"

=begin
num = 1
while num <100
  puts num
  num +=1

  if num % 3 == 0 && num % 5 == 0
    puts "#{num}. FIZZBUZZ!"

  elsif num % 3 == 0
    puts "#{num}. FIZZ!"

  elsif num % 5 == 0
    puts "#{num}. BUZZ!"

  else
    puts "#{num}."
  end
end
=end