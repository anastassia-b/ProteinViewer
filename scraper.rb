require 'nokogiri'
require 'open-uri'
require 'byebug'

link = "http://www.uniprot.org/uniprot/P01096"

page = Nokogiri::HTML(open(link))
info = []

puts "\n\n"

page.css('div.annotation span[property="schema:text"]').each do |section|
  text = section.text[/^.*(?=(\ Publications))/][0...-1]
  info << text
  puts text
end
