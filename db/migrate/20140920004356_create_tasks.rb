class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :name
      t.datetime :completion_date
      t.boolean :date_completed

      t.timestamps
    end
  end
end
