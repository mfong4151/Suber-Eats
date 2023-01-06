class CreateMenuItems < ActiveRecord::Migration[7.0]
  def change

    create_table :menu_items do |t|
      t.string :item_name, null:false
      t.text :description
      t.float :price, null:false
      t.string :header
      t.references :menu, null:false, index:true, foreign_key:{to_table: :menus}
      t.timestamps
    end
  end
end
