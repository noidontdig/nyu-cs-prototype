#!/usr/bin/env ruby
require 'rubygems'

File.open("/Users/Ali/Desktop/table.txt", "r") do |file|
  linetype = 1;
  file.lines.each do |line|
    fixed_line = line.strip;
    if line.strip[0..2] != "<tr" and line.strip[0..3] != "</tr"
      if linetype == 8
        linetype = 1
      end
      case linetype
      when 7
        fixed_line = fixed_line.insert(3, " class=\"room\"")
      when 1
        fixed_line = fixed_line.insert(3, " class=\"number\"")
      when 2
        fixed_line = fixed_line.insert(3, " class=\"call-number\"")
      when 3
        fixed_line = fixed_line.insert(3, " class=\"name\"")
      when 4
        fixed_line = fixed_line.insert(3, " class=\"professor\"")
      when 5
        fixed_line = fixed_line.insert(3, " class=\"days\"")
      when 6
        fixed_line = fixed_line.insert(3, " class=\"time\"")
      end
      linetype = linetype + 1
    end
    puts line.split("<")[0] + fixed_line
  end
end