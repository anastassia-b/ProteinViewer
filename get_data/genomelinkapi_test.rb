require 'json'
require 'httpclient'
require 'byebug'

client = HTTPClient.new
token = 'GENOMELINKTEST'
headers = { Authorization: "Bearer #{token}" }

name = 'eye-color'
population = 'european'
report_url = "https://genomelink.io/v1/reports/#{name}/?population=#{population}"
response = client.get(report_url, header: headers)
puts JSON.parse(response.body)

chrom = 'chr1'
start_pos = '100000'
end_pos = '100500'
sequence_url = "https://genomelink.io/v1/genomes/sequence/?region=#{chrom}:#{start_pos}-#{end_pos}"
response = client.get(sequence_url, header: headers)
# debugger
# puts JSON.parse(response.body)
# don't need to JSON.parse a single string of characters, can just save.
puts response.body
