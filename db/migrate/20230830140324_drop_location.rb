class DropLocation < ActiveRecord::Migration[7.0] 
  def up
    drop_table :locations
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
