class Task < ActiveRecord::Base
  attr_accessible :completion_date, :date_completed, :name
end
