class ChangeDateTypeOnArticles < ActiveRecord::Migration[5.0]
  def self.up
    change_table :articles do |t|
      t.change :date, :date
    end
  end
  def self.down
    change_table :articles do |t|
      t.change :date, :datetime
    end
  end
end
