require 'csv'


=begin
    Common preconditions:
    1. table: Expects an array version of your table that corresponds to the name. 
        Your table MUST be formated as an array containing multiple hashes, see the example from my menu_items class on github.
        Because of how this is set up, the variable name MUST be equivalent to the name of the table in migrations.

    2. class_name: Expects the actual class name created in models. Expects an actual class variable.

    3. table_string: Table name given as a string. Usually used for destroying tables ahead of import. Expects a string

    Common Issues:

    Deleting: The issue occurs if theres a directed graph cycle relation between tables, or if there are joins tables with multiple presence constraints on the foreign keys. 
    Tip: To avoid this you have to typically drop the entire database, although this is obviously not recommended in production.

=end

class EasySeeds

    #Creates a single instance of seed data

    def self.single_seeder(table, class_name, table_string)

        ApplicationRecord.connection.reset_pk_sequence!(table_string)
        puts "Creating #{table_string} seed data..."   
        
        table.each_with_index do |row, i| 
          puts "Finished Seeding the #{i.to_s}th #{table_string} item" if i % 100 >= 1
          class_name.create!(**row)

        end
            
        puts "DONE WITH #{table_string.upcase}, #{table_string.upcase} SEEDING SUCCESSFUL"
        
    end 

    #Creates easy seed data for all classes that are passed in

    def self.create_easy_seed_data(class_names)

      tables, table_strings = csv_to_seeds = EasySeeds.tables_from_csvs
      (0...tables.length).each{|i| EasySeeds.single_seeder(tables[i], class_names[i], table_strings[i])}
    
    end



    def self.find_photo_folder
      seed_folder =''
      cwd = Dir.pwd

      if cwd.include('/db')
      end

    end


    #Attaches images

    def self.attach_images(class_image_names)

      begin
        Dir.chdir('../seed_image_files')
      rescue
        Dir.chdir(Dir.pwd + '/db/seed_image_files')
      end

      Dir.glob("*").each_with_index do |seed_file, i|
        headers, data = EasySeeds.unpack_csvs(seed_file)
        class_image_name = class_image_names[i]
        puts "Attaching to #{class_image_name}..."

        data.each_with_index do |row|

            object_id, url, filename = row
            class_instance = class_image_name.find_by_id(object_id)

            begin
              class_instance.image.attach(io: URI.open(url), filename: filename)
              puts "Attached to #{filename}"

            rescue OpenURI::HTTPError
              puts('Waiting 30 seconds before seeding the next row of data, please be patient')
              sleep(30.second)
              class_instance.image.attach(io: URI.open(url), filename: filename)
              puts "Attached to #{filename}"
            end
        end
      end
    end

  
    ###For manually destroying tables, useful for if you have many joins tables. 
    def self.destroy_table(class_name, table_string)
      puts "Destroying the #{table_string} table"
      class_name.destroy_all
      ApplicationRecord.connection.reset_pk_sequence!(table_string)
    end


    ###Used in conjunction to destroy all of your tables
    def self.destroy_tables(class_names, table_strings)

      (class_names.length - 1).downto(0) {|i|EasySeeds.destroy_table(class_names[i], table_strings[i])}
    end


    ##Reads and parses CSVS

    def self.unpack_csvs(seed_file)
      data = []
      CSV.foreach(seed_file) {|row|data << row}
      headers = data.shift
      headers.map{|header| header.to_sym}
      return headers, data

    end
    
   
    ##Gets tables from csvs 
    def self.tables_from_csvs
        
        all_seed_data = []
        table_strings = []
        seed_folder = './db/seed_files'
        
        Dir.chdir(seed_folder)
        
        Dir.glob("*").each do |seed_file|

            seed_res = []
            headers, data = unpack_csvs(seed_file)
            
            data.each_with_index do |row, j|
                
                datum = {}
            
                row.each_with_index do |col, i|
                    
                  key = EasySeeds.clean_headers(headers[i])
                  datum[key[0]] = type_conversion(row[i], key[1])
                
                end
            
                seed_res << datum
            end
            
            
            table_strings << seed_file[seed_file.index('_') + 1..-11]
            all_seed_data << seed_res
        end
        
        return all_seed_data, table_strings

    end

    protected

    def self.clean_headers(header)
        if header.include?(":")
          first, second, = header.split(":")
          header_and_type = [first.downcase, second]
        else
          header_and_type = [header.downcase, 'string']
        end
        return header_and_type
    end

     
    #Used for converting your data to the relevant data types, all data from csvs comes in as string by default
    #Its important to note that this isn't suppose to turn it into the datatype for your SQL table, but rather the format that ruby needs to understand the CSV item as, since all data from CSV comes in as a string by default.
    #datum: string, refers to the actual piece of data you are using
    #data_type, the type you wish to convert to, by default will return a string if none is given

    def self.type_conversion(datum, data_type = 'string')

      if ['text', 'string', 's'].include?(data_type)
        return datum.to_s
      
      elsif ['int', 'integer', 'i'].include?(data_type)
        return datum.to_i
      
      elsif ['float', 'f'].include?(data_type)
      
        return datum.to_f

      elsif ["bool", "boolean"].include?(data_type)

        return ActiveModel::Type::Boolean.new.cast(datum)

      elsif ["date"].include?(data_type)
        return DateTime.parse(datum).to_date.to_s

      else
        return datum
      end
    end
end


      