insert into crop_years(code,name) values('2526','2025-26'),('2627','2026-27') on conflict do nothing;
insert into quality_marks(code,name,sort_order) values('QP','Pending',0),('Q1','1st Quality',1),('Q2','2nd Quality',2),('Q3','3rd Quality',3),('FAQ','FAQ',4) on conflict do nothing;
insert into commodities(code,name,category,default_uom,inward_packing_mode,outward_packing_mode,inward_weight_basis,outward_weight_basis,inventory_quantity_basis,standard_net_weight_per_bag_kg,standard_empty_bag_tare_kg,bags_mandatory_inward,bags_mandatory_outward) values
('TUR','Toor','Pulses','MT','loose','bags','net_commodity','inclusive_of_bag','net_commodity',50,0.12,false,true),
('CHN','Chana','Pulses','MT','loose','bags','net_commodity','inclusive_of_bag','net_commodity',50,0.12,false,true),
('MAZ','Maize','Cereals','MT','bags','bags','inclusive_of_bag','inclusive_of_bag','inclusive_of_bag',50,0.12,true,true)
on conflict(code) do nothing;
insert into godowns(code,full_name,short_name,address_line_1,district,state,state_code,pincode,ownership,size_sq_ft,capacity_qty_kg) values
('ALI-G1','Rajguru Foods Aliyabad Godown 1','Aliyabad G1','KIADB Industrial Area, Aliyabad','Vijayapura','Karnataka','KA','586104','own',16000,3000000),
('ALI-BIN','Rajguru Foods Aliyabad Storage Bins','Storage Bins','KIADB Industrial Area, Aliyabad','Vijayapura','Karnataka','KA','586104','own',8000,1000000)
on conflict(code) do nothing;
insert into parties(code,name,party_types,state_code) values('RF','Rajguru Foods',array['owner'],'KA'),('F001','Sample Farmer',array['farmer'],'KA'),('C001','Sample Customer',array['customer'],'KA') on conflict(code) do nothing;
insert into banks(code,name,branch) values('PNB','Punjab National Bank','Vijayapura'),('HDFC','HDFC Bank','Vijayapura') on conflict(code) do nothing;
insert into collateral_managers(code,name) values('NCML','National Collateral Management Services'),('STAR','Star Agri Warehousing') on conflict(code) do nothing;
